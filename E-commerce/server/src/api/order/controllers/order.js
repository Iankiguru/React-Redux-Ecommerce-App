'use strict';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(stripe);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi}) => ({
    async create(ctx) {
        const { products, userName, email } = ctx.request.body;

        try{
            //retrieve item information
            const lineItems= await Promise.all(
                products.map(async (product) => {
                    const item = await strapi.service("api::item.item").findOne(product.id)


                    return {
                        price_data : {
                            currency: "usd",
                            product_data: {
                                name: item.name,
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: product.count,
                    }
                })
            )

            //create stripe session
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                customer_email: email,
                success_url : "http://localhost:3000/checkout/success",
                cancel_url : "http://localhost:3000",
                line_items: lineItems,

            });

            //create order
            await strapi.service("api::order.order").create({
                data : {userName, products, stripeSessionId: session.id}
            });

            //return the session id
            return {id : session.id}
        } catch (err) {
            ctx.response.status = 500;
            console.log(err);
            return {error: { message : "Something went wrong"}}
        }
    }
}));
