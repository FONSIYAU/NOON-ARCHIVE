// schemas/homepage.ts
// 这就是你给客户定义的“填空题”

export default {
  name: 'homepage',
  title: '首页配置 (Homepage)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '大标题 (Hero Title)',
      type: 'string',
      description: '首页最醒目的大字，例如 STRUCTURAL SILENCE',
    },
    {
      name: 'heroImage',
      title: '封面大图 (Hero Image)',
      type: 'image',
      options: {
        hotspot: true, // 允许客户裁剪图片的焦点
      },
    }
  ],
}
