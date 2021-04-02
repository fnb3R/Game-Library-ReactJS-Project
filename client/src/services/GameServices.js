const apiKey = "AIzaSyCq5HVo-GVm5D2dPdxFFze3n-Uu88eQV9M";

const databaseUrl = "https://the-game-library-project-default-rtdb.firebaseio.com/";


const request = async (url, method, body) => {
    let options =  {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...body, returnSecureToken: true})
        });
    }

    let response = await fetch(url, options)
    let data = await response.json();
    return data;
}

const gameService = {
    
    async add(gameData,tokenId) {
        let res = await request(`${databaseUrl}/games.json?auth=${tokenId}`, 'POST', gameData );
        return res;
    },


    async getAll() {
        let res = await request (`${databaseUrl}/games.json`, 'GET');
       // return res;
        return res?Object.keys(res).map(key => Object.assign(res[key], {key}) ) :[];
    },

    // async getOne(id) {
    //     let res = await request(`${databaseUrl}/games/${id}.json`, 'GET');
    //     return res;
    // },

    // async getAllByUser() {
    //     // let neshto = {
    //     //     city: 'fddd'
    //     // }
    //     // let neshtoStringify = JSON.stringify(neshto);
    //     let res = await request (`${databaseUrl}/games/${neshtoStringify}.json`, 'GET');
    //     console.log(res);
    //     return Object.keys(res).map(key => Object.assign(res[key], {key}) );
    // },

    // async editOne(id, destination, city, duration, departureDate, imgUrl) {
    //     let res = await request(`${databaseUrl}/games/${id}.json`, 'GET');
    //     let newObj = JSON.parse(res);

    // }

}

export default gameService;