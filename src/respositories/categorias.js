import config from '../config'

async function getAll() {
  try {
    const response = await fetch(`${config.URL}/categorias`)
    const json = await response.json()
    return json
  } catch (err) {
    return err
  }
}

async function getAllWithVideos() {
  try {
    const response = await fetch(`${config.URL}/categorias?_embed=videos`)
    const json = await response.json()
    return json
  } catch (err) {
    return err
  }
}

async function create(data) {
  console.log('iai')
  return fetch(`${config.URL}/categorias`, {
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

      throw new Error('Não foi possível criar a categoria')
    })
}

export default {
  create,
  getAll,
  getAllWithVideos
}