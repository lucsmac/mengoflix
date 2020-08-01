import config from '../config'

async function create(data) {
  return fetch(`${config.URL}/videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(async (response) => {
      if (response.ok) {
        const json = await response.json()
        return json
      }

      throw new Error('Não foi possível criar o vídeo')
    })
}

export default {
  create
}