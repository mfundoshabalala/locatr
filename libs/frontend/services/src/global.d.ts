declare const process: {
  env: {
    [key: string]: string | undefined;
  };
};

console.log(process.env);