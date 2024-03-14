import Card from './components/Card';
import HomePage from './pages/Home';
function App() {
  const imageUrl = 'https://picsum.photos/id/237/200/300';
  return (
    // <div className="flex justify-center">
    //   <Card
    //     image={imageUrl}
    //     title="Card Title"
    //     text="This is some content for the card body."
    //   />
    //   <Card
    //     image={"https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    //     title="London,UK"
    //     text="This is some content for the card body."
    //   />
    // </div>
    <HomePage />
  )
}
export default App
