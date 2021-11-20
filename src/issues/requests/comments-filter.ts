export interface CommentsFilter {
  // the page offset, if not specified then defaults to 0
  startAt?: number;
  // how many results on the page should be included. Defaults to 50.
  maxResults?: number;
  // ordering of the results.
  orderBy?: string;
  // optional flags: renderedBody (provides body rendered in HTML)
  expand?: string;
}
