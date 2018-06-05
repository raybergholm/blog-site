const DEFAULTS = {
  Title: "PLACEHOLDER TITLE",
  Author: "PLACEHOLDER AUTHOR",
  Summary: "PLACEHOLDER SUMMARY",
  Body: "PLACEHOLDER TEXT",
  YearMonthKey: "2000-01",
  PublishDate: "2000-01-01:00:00:00Z",
  RestUrlKey: "Placeholder",
  Tags: []
};

class BlogPost {
  constructor(params) {
    const { title, author, summary, body, yearMonthKey, publishDate, restUrlKey, tags } = params;

    this.title = title || DEFAULTS.Title;
    this.author = author || DEFAULTS.Author;
    this.summary = summary || DEFAULTS.Summary;
    this.body = body || DEFAULTS.Body;
    this.yearMonthKey = yearMonthKey || DEFAULTS.YearMonthKey;
    this.publishDate = publishDate || DEFAULTS.PublishDate;
    this.restUrl = restUrlKey || DEFAULTS.RestUrlKey;
    this.tags = tags || DEFAULTS.Tags;
  }
}

export default BlogPost;

