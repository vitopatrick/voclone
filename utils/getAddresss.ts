import {
  addressFive,
  addressFour,
  addressSix,
  addressThree,
  addressTwo,
  addresses,
} from "../lib/wallet-address";

export function getAddress(address_number: number | any) {
  switch (address_number) {
    case address_number == 1:
      return addresses;
    case address_number == 2:
      return addressTwo;
    case address_number == 3:
      return addressThree;
    case address_number == 4:
      return addressFour;
    case address_number == 5:
      return addressFive;
    case address_number == 6:
      return addressSix;
    default:
      return addresses;
  }
}
