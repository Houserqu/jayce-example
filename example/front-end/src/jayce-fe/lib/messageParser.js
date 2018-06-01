function messageParser(msg, store) {
  let msg = JSON.parse(msg);

  switch(msg.header.type) {
    case 'POST' : break;
    case 'SUBSCRIBE' : store.dispatch(msg.body);
  }
}