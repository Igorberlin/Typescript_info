enum Membership{
    Simple,
    Standard,
    Premium
}

const memberShip = Membership.Standard
const memberShipReverse = Membership[2]

console.log(memberShip) // 1
console.log(memberShipReverse)// Premium


enum SocialMedia{
    VK = 'VK',
    FACEBOOK = 'Facebook',
    INSTAGRAM='Instagram'
}

const social = SocialMedia.INSTAGRAM
console.log(social);  //Instagram
