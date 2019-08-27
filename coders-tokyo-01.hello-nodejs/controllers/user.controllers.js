const users = [
    {id: 1, name: 'One'},
    {id: 2, name: 'Two'},
    {id: 3, name: 'Three'},
    {id: 4, name: 'Four'},
    {id: 5, name: 'Five'},
    {id: 6, name: 'Six'},
    {id: 7, name: 'Seven'}
]

module.exports = {
    index: (req, res)=>{
        res.render('index', {name: 'Nhat'});
    },
    users: (req, res) => {
        res.render('users/index', {users: users})
    },
    usersSearch: (req, res) => {
        const q = req.query.q
        const matchUser = users.filter((user)=>{
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })
        res.render('users/index', {users: matchUser})
    }
}