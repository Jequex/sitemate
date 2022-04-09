let data = []

exports.post = async (req, res) => {
    const { requestData } = req.body;
    try {
        data.push(requestData);
        res.send(requestData);
    } catch (e) {
        res.status(500).send({ message: 'server error' });
    }
}
exports.get = async (req, res) => {
    try {
        res.send(data);
    } catch (e) {
        res.status(500).send({ message: 'server error' });
    }
}
exports.put = async (req, res) => {
    const { requestData } = req.body;
    try {
        data.splice(data.findIndex(a => a.id === requestData.id), 1, requestData);
        res.send(requestData)
    } catch (e) {
        res.status(500).send({ message: 'server error' });
    }
}
exports.delete = async (req, res) => {
    const { id } = req.query;
    try {
        data = data.filter(a => a.id !== id);
        res.send({message: 'delete data successful'})
    } catch (e) {
        res.status(500).send({ message: 'server error' });
    }
}