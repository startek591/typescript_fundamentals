// typeof
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }

  throw new Error(
    'Invalid arguments. Both arguments must be either numbers or strings.'
  );
}

// instanceof

class Customer {
  isCreditAllowed(): boolean {
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) {
  let message: string;
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }

  return message;
}

// in operator

function signContract2(partner: BusinessPartner) {
  let message: string;
  if ('isCreditAllowed' in partner) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }

  return message;
}

// user-defined type guards

function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

function signContract3(partner: BusinessPartner): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue';
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further';
  }

  return message;
}
