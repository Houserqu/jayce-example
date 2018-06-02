function messageParser(msg, store) {
  let response = JSON.parse(msg.data);

  console.log(response);

  switch(response.header.type) {
    case 'POST' : break;
    case 'SUBSCRIBE' : store.dispatch(response.body);
  }
}

export default messageParser;