import { lazy } from 'react';

export function lazyLoad(path: string, namedExport?: string) {
  return lazy(() => {
    const promise = import(path);
    if (!namedExport) return promise;
    else return promise.then((module) => ({ default: module[namedExport] }));
  });
}
