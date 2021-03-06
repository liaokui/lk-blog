/* eslint-disable strict */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('lkblog');

  const ProjectSchema = new Schema({
    title: { type: String, required: true },
    githubAddress: { type: String },
    showAddress: { type: String },
    introduction: { type: String },
    tagId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    cover: { type: String },
    content: { type: String },
    status: { type: Number }, // 0: 草稿，1: 已发表
    createTime: { type: String },
    updateTime: { type: String },
  });

  return conn.model('Project', ProjectSchema);
};
