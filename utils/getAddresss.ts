import {
  addressFive,
  addressFour,
  addressSix,
  addressThree,
  addressTwo,
  addresses,
} from "../lib/wallet-address";

export function getAddress(address_number: number | any) {
  if (address_number === 1) {
    return addresses;
  } else if (address_number === 2) {
    return addressTwo;
  } else if (address_number === 3) {
    return addressThree;
  } else if (address_number === 4) {
    return addressFour;
  } else if (address_number === 5) {
    return addressFive;
  } else if (address_number === 6) {
    return addressSix;
  }
}
