import Workshop from '../models/workshop-model.js';

export const store = async (req, res) => {
    try {
        const workshop = await Workshop.create(req.body);
        return res.status(201).json(workshop);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const index = async (req, res) => {
    try {
        const workshops = await Workshop.find().exec();
        return res.status(200).json(workshops);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const update = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(workshop);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

export const destroy = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id).exec();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error });
    }
};