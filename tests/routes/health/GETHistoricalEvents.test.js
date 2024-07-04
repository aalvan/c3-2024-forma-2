import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import historicalEventsRepository from '../../../src/domain/historical_events/repository/historicalEventsRepository'
describe('GET /api/users/:ocurrence', ()=>{

    beforeEach(()=>{
        sinon.restore();
    });

    test('if ocurrence equal to ac, return events i ascending order', async ()=>{
        sinon.stub(historicalEventsRepository, 'getHistoricalEvents').returns(getMockAcData())
        const ocurrence = 'ac'
        const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockAcData())
    });

    test('if ocurrence equal to dc, return events i ascending order', async ()=>{
        const ocurrence = 'dc'
        sinon.stub(historicalEventsRepository, 'getHistoricalEvents').returns(getMockDcData())
        const response = await request(app.callback()).get(`/api/history/${ocurrence}`);

        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockDcData())
    });
    test('if ocurrence equal to an alphanumeric characters or a number, return 400 error', async ()=>{
        const ocurrence = 'd1'
        sinon.stub(historicalEventsRepository, 'getHistoricalEvents').returns()
        const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
        const message = "Solo se aceptan caracteres no numéricos"
        expect(response.status).toBe(400)
        expect(response.body.message).toBe(message)
    });

    test('if lenth of ocurrence != 2, return 400 error', async ()=>{
        const ocurrence = '111'
        sinon.stub(historicalEventsRepository, 'getHistoricalEvents').returns()
        const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
        const message = "El input debe ser ac o dc"
        expect(response.status).toBe(400)
        expect(response.body.message).toBe(message)
    });
});

function getMockAcData(){
    return [
        {
            "date": "-299",
            "description": "Los Samnitas, inician los preparativos de la Tercera guerra Samnita contra los romanos, reclutando tropas mercenarias de Galos y Sabinos y estableciendo alianzas con Etruscos y otros pueblos itálicos.",
            "lang": "es",
            "granularity": "year"
        },
        {
            "date": "-298",
            "description": "Inicio de la Tercera Guerra Samnita entre la República romana y una coalición de samnitas, etruscos, celtas, sabinos, lucanos y umbros.",
            "lang": "es",
            "granularity": "year"
        },
        {
            "date": "-297",
            "description": "Roma conquista Rodas, anexionándola al Imperio romano",
            "lang": "es",
            "granularity": "year"
        }
    ]
}

function getMockDcData(){
    return [
        {
            "date": "1",
            "description": "Fundación de Aksum (ciudad) en Etiopía.",
            "lang": "es",
            "category1": "África",
            "granularity": "year"
        },
        {
            "date": "1",
            "description": "Amanishakheto, reina de Kush, Nubia, muere. Su hijo Natakamani asciende al trono de Kush.",
            "lang": "es",
            "category1": "África",
            "granularity": "year"
        }
    ]
}




//test('if ocurrence equal to ac ad, return events i descending order')