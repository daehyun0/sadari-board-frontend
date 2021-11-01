export default {
    lists () {
        // [TODO]: posts API mapping
        // return axios.get(host + '/posts')
        return Promise.resolve([
            {
                no: 123,
                title: 'asdf',
                writer: 'writer1',
                createdAt: '2021-09-11 00:00:00'
            }
            // new Post(123, 'asdf', 'writer1', '2021-09-11 00:00:00')
        ])
    }
}