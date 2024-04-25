
const incidentes_totales = new Map(); // incidentes totales {id_incidente_0 => [incident_plate0_0, incident_plate0_1], id_incidente_1 => [incident_plate1_0, incident_plate1_1]}
const patentes_registradas = new Map(); // [plate_0, [incident_plate0_0, incident_plate0_1]
let eventos_por_patente= new Map(); // (reseteable) [patente_0, [evento_en_tsh_0, evento_en_tsh_1,...]]

const events = []
let current_incident_Id = 0;

exports.getEvents = () => {
    return events
}

exports.addEvent = (context, metadata, timestamp, threshold) => {
    const event = {
        id: Date.now().toString(),  // asignar id de manera incremental e irrepetible
        context: context,
        metadata: metadata,
        timestamp: timestamp
    }
    if(patentes_registradas.has(metadata)){   // si la patente ya esta registrada

        const ultimo_incidente = patentes_registradas.get(metadata).at(-1); // obtener el ultimo incidente de la patente
        const timestamp_inicio_tsh = incidentes_totales.get(ultimo_incidente).timestamp; // obtener el timestamp del ultimo incidente

        if(event.timestamp - timestamp_inicio_tsh < (threshold*1000)){  // si el evento se encuentra dentro del threshold
            if (eventos_por_patente.has(eventData.metadata)) {
                eventos_por_patente.get(eventData.metadata).push(event) // agrego el evento a la lista de eventos de la patente
            }else{
                eventos_por_patente.set(eventData.metadata, [event])    // creo la lista de eventos de la patente
            }   
        }else{  // si el evento se encuentra fuera del threshold,
            incidentes_totales.get(ultimo_incidente).push(eventos_por_patente) //se agregan los eventos que si se encuentran dentro,
            eventos_por_patente.clear() // y se limpia el mapa para ser llenado por la siguiente patente
        }

    }else{      // primer registro de la patente
        patentes_registradas.set(metadata, [])
        current_incident_Id++; // asignar id de manera incremental e irrepetible
        incidentes_totales.push({
            id: current_incident_Id,
            plates: [metadata, [event]]
        })

    } 
    
    
    
    return product
}


