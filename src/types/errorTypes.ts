export interface ActivityNotFound {
  message: string;
}
export interface ActivityError {
  detail: Array<{
    loc: Array<string>;
    msg: string;
    type: string;
  }>;
}
