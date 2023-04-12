export const GetAuthHeaders = async () => {
  //Not writing this logic as it is not required still writing comments to show how I would proceed in case there were these requiremens.
  //here we can write logic for getting token from storage(local/session) veryfying it for expiration and regenrating it
  //since for our scenario there is no such thing only returning an object from here
  return {
    "content-type": "application/json",
  };
};
