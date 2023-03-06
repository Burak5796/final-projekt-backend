import City from "./citymodel.js";


export const postOne = async (req,res) => {
    try {
        const newCity = await City.insertMany(req.body);
        res.status(200).json(newCity);
    } catch (error) {
        res.status(400).send(error)
    }
}


export const getCity = async (req,res) => {
    try {
        const all = await City.find({
            city: req.params.city
            });
        res.status(200).json(all);
    } catch (error) {
        res.status(400).send(error)
    }
}


export const getAll = async (req,res) => {
    try {
        const all = await City.find();
        res.status(200).json(all);
    } catch (error) {
        res.status(400).send(error)
    }
}