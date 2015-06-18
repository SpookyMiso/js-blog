/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/blog.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}
/*******************************/
var expect = chai.expect;
var should = chai.should();

var blogFactory = GLOBAL.blogFactory;

describe("#blogFactory", function() {

  var blog1, blog2;

  beforeEach (function () {
    blog1 = blogFactory({
      author: "Jenn",
      name: "Spooky Miso"
    });

    blog2 = blogFactory({
      author: "Finn",
      name: "Adventure Time"
    });
  });

  it('should be a function', function () {
    expect(blogFactory).to.exist;
    expect(blogFactory).to.be.an('function');
  });

  it('should have an author', function () {
    expect(blog1.getAuthor).to.be.an('function');
    expect(blog1.getAuthor()).to.equal('Jenn');
    expect(blog2.getAuthor()).to.equal('Finn');
  });

  it('should be able to edit author', function() {
    expect(blog1.editAuthor).to.be.a('function');

    blog1.editAuthor('Jake');
    expect(blog1.getAuthor()).to.equal('Jake');
    expect(blog2.getAuthor()).to.equal('Finn');
  });

  // it.skip('should not let you delete the author\'s', function() {
  //   blog2.editAuthor('');
  //   expect(blog2.getAuthor()).to.equal('Finn');
  // });

  it('should have a blog name', function() {
    expect(blog1.getBlogName).to.be.a('function');

    expect(blog1.getBlogName()).to.equal('Spooky Miso');
    expect(blog2.getBlogName()).to.equal('Adventure Time');
  });

  it('should be able to edit blog name', function() {
    expect(blog1.editBlogName).to.be.a('function');

    blog1.editBlogName('Spooky Andagi');
    expect(blog1.getBlogName()).to.equal('Spooky Andagi');
    expect(blog2.getBlogName()).to.equal('Adventure Time');
  });

  it('should be able to create posts', function() {
    expect(blog1.createPost).to.be.a('function');
  });

  it('should be able to get posts', function() {
    expect(blog1.getPosts).to.be.a('function');
  });

  it('should be able to delete posts', function() {
    expect(blog1.deletePost).to.be.a('function');
  });

});

