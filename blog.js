function blogFactory (settings) {
  var author = settings.author;
  var blogName = settings.name;
  var post = [];
  var blog = {

    getAuthor: _getAuthor,
    editAuthor: _editAuthor,
    //protectAuthor: _protectAuthor
    getBlogName: _getBlogName,
    editBlogName: _getBlogName,
    createPost: _createPost

  };

  return blog;

  function _getAuthor () {
    return author;
  }

  function _editAuthor (_newAuthor) {
    author = _newAuthor;
      return author;
  }

  // function _protectAuthor () {
  //   var noChange = true;
  //   if (_newAuthor = nochange) {
  //     return true;
  //   }

  function _getBlogName () {
    return blogName;

  }

  function _editBlogName (_newBlogName) {
    blogName = _newBlogName;
      return blogName;
  }

  function _createPost (){
    var post = PostFactory(settings);

    return post;

    function PostFactory (settings) {
      var type = settings.type;
      var title = settings.title;
        return {
          type: type,
          title: title
        };
    }
  }

  function _getPosts () {

  }

}
