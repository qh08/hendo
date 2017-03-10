export const NAME_SPACE = 'home'

export default {
    state: {
        userList: [],
        reportList: []
    },
    mutations: {
        'home/setUserList' (state, {
            data
        }) {
            state.userList = data
        }
    },
    actions: {
        'home/getUserList' (context) {
            $.ajax({
                type: 'GET',
                url: '/api/user',
                data: {},
                dataType: 'JSON',
                error(err) {
                    console.log('error!' + err)
                },
                success(responseData) {
                    console.log('success!')
                    console.dir(responseData)
                    context.commit('home/setUserList', {
                        data: responseData.data.userList
                    })
                }
            })
        }
    },
    getters: {

    }
}
