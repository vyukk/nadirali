export const asset = (name) => `/assets/${name}`

export const products = {
  bags: { title: 'Bags', image: 'Untitled.jpeg', items: ['Euphonium Bag', 'Trombone Bag', 'Trumpet Gig Bag'] },
  bugle: { title: 'Bugle', image: 'nadir-ali-bugle-gi-tagged-indian-government.jpg', items: ['Bugle Copper'] },
  clarinet: { title: 'Clarinet', image: 'Untitledjj.jpeg', items: ['Clarinet - Rico 3.5', 'Clarinet - Rico Royal', 'Clarinet - Vandoren', 'Clarinet'] },
  dhols: { title: 'Dhols', image: 'nadir-ali-official-statement.jpg', items: ['P.T. Dhol', 'Thap Dhol 17″', 'Thap Dhol 12″'] },
  euphonium: { title: 'Euphonium', image: 'faez-aftab-nadir-ali-and-company.jpg', items: ['Euphonium'] },
  trumpet: { title: 'Trumpet', image: 'nadir-ali-bugle-gi-tagged-indian-government.jpg', items: ['Trumpet', 'Trumpet Nickel Sterling Big Bell.', 'Trumpet with Water Key Nickel Plated'] },
  others: { title: 'Others', image: 'nadir-logo-white-1.png', items: ['Euphonium', 'French Horn', 'Pocket Cornet', 'Trumpet'] },
}

export const news = [
  { title: 'A Timeless Sound Recognized: Meerut Bugle Earns Geographical Indication (GI) Tag', date: 'August 7, 2026', image: 'nadir-ali-bugle-gi-tagged-indian-government.jpg' },
  { title: "Fake Musical Instrument Factory Busted in Meerut: Millions Earned Using Legendary Brand 'Nadir Ali & Co.'", date: 'July 25, 2026', image: 'nadir-ali-official-statement.jpg' },
  { title: 'Classic FM Music Awards 2004', date: 'April 18, 2023', image: 'Untitled.jpeg' },
  { title: 'Roger Webster', date: 'April 18, 2023', image: 'Untitledjj.jpeg' },
]

export const productLinks = Object.entries(products)