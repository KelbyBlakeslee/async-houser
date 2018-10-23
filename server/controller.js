module.exports = {
    addProperty: function (req, res) {
        const db = req.app.get('db')
        let { prop_name, prop_desc, prop_address, prop_city, prop_state, prop_zip, prop_loan, prop_image, prop_rent } = req.body.property;
        let {user_id} = req.session.user
        db.create_property([prop_name, prop_desc, prop_address, prop_city, prop_state, prop_zip, prop_image, prop_loan, prop_rent, user_id])
            .then(response => {
                res.status(200).send(response)
            })
    },
    deleteProperty: function (req, res) {
        console.log('delete', req.body)
        const db = req.app.get('db')
        let { id } = req.params
        db.delete_property([id])
            .then(response => {
                res.status(200).send(response)
            })
    },
    getPropertyId: function (req, res) {
        const db = req.app.get('db')
        console.log('yeehaw',req.session)
        let { user_id } = req.session.user
        db.get_users_properties([user_id])
            .then(response => {
                res.status(200).send(response)
            })
    },
    getUser: function (req, res) {
        const db = req.app.get('db')
        let { username, password } = req.body
        db.get_users([username, password])
            .then(response => {
                req.session.user = {
                    user_id: response[0].id
                }
                res.status(200).send(response)
            })
    },
    registerUser: function (req, res) {
        const db = req.app.get('db')
        let { username, password } = req.body
        db.create_user([username, password])
            .then(response => {
                req.session.user = {
                    user_id: response[0].id
                }
                res.status(200).send(response)
            })
    },
    logoutUser: function (req) {
        req.session.destroy()
    }
}