import historicalEventsRepository from '../repository/historicalEventsRepository'

exports.getHistoricalEventsByOcurrence = (ctx) => {
    const ocurrence = ctx.params.ocurrence
    let regex = /^[a-zA-Z]+$/;

    if(ocurrence.length !== 2){
        ctx.status = 400;
        ctx.body = {message: "El input debe ser ac o dc"}
    }
    else if ((containsNumber(ocurrence) || !(regex.test(ocurrence)))){
        ctx.status = 400;
        ctx.body = {message: "Solo se aceptan caracteres no numéricos"}
    }
    else{
        ctx.body = historicalEventsRepository.getHistoricalEvents(ctx.params.ocurrence)
    }
    return ctx
}

function containsNumber(str) {
    // Check if the string contains any digit between 0 and 9
    return /\d/.test(str);
}