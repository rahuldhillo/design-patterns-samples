import { Iuser } from 'src/app/models/iuser';

export class Factory {
  static createUser(type: string): Iuser {
    switch (type) {
      case 'user':
        return new User();
      case 'admin':
        return new Admin();
      default:
        throw new Error(`Invalid user type: ${type}`);
    }
  }
}

class User implements Iuser {
  displayMessage() {
    return 'I am a user';
  }
}

class Admin implements Iuser {
  displayMessage() {
    return 'I am an admin';
  }
}
