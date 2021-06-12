const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const [, resource, id, verb] = url.split('/');
    return {
      resource: resource || null,
      id: id || null,
      verb: verb || null,
    };
  },

  _urlCombiner({ resource, id, verb }) {
    return (
      (resource ? `/${resource}` : '/')
      + (id ? '/:id' : '')
      + (verb ? `/${verb}` : '')
    );
  },
};

export default UrlParser;
