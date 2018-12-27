const Story = require('../model/story');

const getAll = async ({ page, limit }) => await Story.find().skip(page * limit).limit(limit);

const getById = async _id => await Story.findById(_id);

const create = async ({ content }) => await Story.create({ content });

const update = async ({ _id, content }) => {
    const story = await Story.findById(_id);
    if (!story)
        throw "Cannot find the story by this id";
    if (story.content === content)
        throw "Nothing gonna change";
    story.content = content;
    story.updatedAt = Date.now();
    await story.save();
    return story;
}

const del = async _id => {
    const story = await Story.findById(_id);
    if (!story)
        throw "Cannot find the story by this id";
    story.isDeleted = true;
    await story.save();
    return story;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,
}