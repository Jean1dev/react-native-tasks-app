module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/tasks').all(app.config.passport.authenticate())
        .get(app.api.task.getTasks)
        .post(app.api.task.save)
        .put(app.api.task.toggleTask)

    app.route('/tasks/:id').all(app.config.passport.authenticate())
        .delete(app.api.task.remove)

}