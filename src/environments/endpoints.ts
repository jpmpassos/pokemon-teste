const env = {
    prod: {
        BACK_HOST: 'https://api.pokemontcg.io/v1'
    },
    dev: {
        BACK_HOST: 'https://api.pokemontcg.io/v1'
    }
}

export const endpoins = (ambiente: string) => {
    const URL_BASE = env[ambiente].BACK_HOST;
    return {
        card: (param) => `${URL_BASE}/cards${param ? "?" + param : ""}`,
    }
}

//page=1&pageSize=12