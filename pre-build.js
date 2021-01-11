var fs = require('fs');

let blogPosts = fs.readdirSync('./public/blog/');

let json = [];

blogPosts.map(blogPost => {
  let title = blogPost
    .replace(".md", "")
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
  
  let text = fs.readFileSync('./public/blog/' + blogPost, 'utf-8');

  let heading = text
    .match(/\#\#*(.*)\r?\n/g)[0]
    .replace(/\#\#*(.*)\r?\n/g, '$1')
    .trim();

  json.push({ title, heading, file: blogPost })
})

let data = JSON.stringify(json);
fs.writeFileSync('./public/blogList.json', data);