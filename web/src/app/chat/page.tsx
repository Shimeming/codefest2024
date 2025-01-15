import ContactCard from "./contact-card";
const contacts = [
  {
    id: '1234',
    online: true,
    name: "金大森",
    lastMessage: "Hello"
  },
  {
    id: '5678',
    online: false,
    name: "金小森",
    lastMessage: "bye"
  },
  {
    id: '9012',
    online: false,
    name: "金森",
    lastMessage: "ouo"
  }
];

const Page = () => {
  return (
    <main className="flex flex-col gap-2">
      {contacts.map((contact) => (
        <ContactCard 
          key={contact.id}
          {...contact}
        />
      ))}
    </main>
  )
}

export default Page;