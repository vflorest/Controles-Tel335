import Router from 'koa-router'
import getHealth from './health/health'
import { addEvent } from '../actions/event/event'

const router = new Router()

router.get('/health', getHealth)




// POST /api/event/threshold/5
//router.post('/api/event/threshold/:num', addEvent)

router.post('/api/event/threshold/:num', async (ctx) => {
    const eventData= ctx.request.body;
    if (!eventData.context|| !eventData.metadata || !eventData.timestamp) {
        ctx.status = 400; // código de estado
        ctx.body = {status: "NOK", error: 'One or more attributes did no came on the request' };
        return;
    }
    try {
        const threshold = ctx.params.num;
        // console.log(eventData )
        // console.log(threshold)
        const newEvent = await addEvent(eventData.context, eventData.metadata, eventData.timestamp, threshold)
        ctx.status = 200; // Producto agregado con éxito, código de estado 200
        ctx.body = newProduct; // Devolver el producto agregado en formato JSON
    } catch (error) {
        ctx.status = 500; // Error interno del servidor, código de estado 500
        ctx.body = { status: "NOK", error: 'INTERNAL SERVER ERROR' };
    }

});



export default router
