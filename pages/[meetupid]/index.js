import MeetupDetails from '../../components/meetups/MeetupDetails';

const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image: "https://www.baltic.travel/uploads/2021/08/Return_of_Sports.jpg",
      address: "Some address 5, 12345 Some City",
      description: "This is a first meetup!",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "http://brightstepacademy.com/wp-content/uploads/2020/01/Singing.jpg",
      address: "Some address 10, 12345 Some City",
      description: "This is a second meetup!",
    },
  ];

function MeetupDetail() {

  return (
    {DUMMY_MEETUPS.map((currElement) => (
        <MeetupDetails
          id={currElement.id}
          image={currElement.image}
          title={currElement.title}
          address={currElement.address}
        />
      ))}
    );
    }


export default MeetupDetail;