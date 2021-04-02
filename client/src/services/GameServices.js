const apiKey = "AIzaSyCq5HVo-GVm5D2dPdxFFze3n-Uu88eQV9M";

const url = "https://the-game-library-project-default-rtdb.firebaseio.com/";

const gameService = {
    
    async add(destinationData) {
        console.log(`${databaseUrl}/games.json?auth=${authService.getUser()}`);
        let res = await request(`${databaseUrl}/games.json?auth=${authService.getData().tokenId}`, 'POST', destinationData );
        
        return res;
    },

    async getAll() {
        let res = await request (`${databaseUrl}/games.json`, 'GET');
        return Object.keys(res).map(key => Object.assign(res[key], {key}) );
    },

    async getOne(id) {
        let res = await request(`${databaseUrl}/games/${id}.json`, 'GET');
        return res;
    },

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