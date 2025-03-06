import Image from "next/image"

const objectives = [
  {
    icon: "/image/disability.png",
    title: "Representation",
    description: "Making sure children with disabilities are included and see themselves in our stories.",
  },
  {
    icon: "/image/book-open-reader-solid.svg",
    title: "Early Learning",
    description: "Helping children with disabilities learn and enjoy reading from a young age.",
  },
  {
    icon: "/image/africamap.jpg",
    title: "African Legacy",
    description: "Building a lasting impact on storytelling and inclusion in African disability communities.",
  },
  {
    icon: "/image/inclusive.png",
    title: "Diversity",
    description: "Celebrating and including people from all African backgrounds in our stories.",
  },
]

export default function Objectives() {
  return (
    <section id="goals" className="reveal">
      <div className="purpose">
        <div id="purpose-statement">
          <h2>Our Objectives</h2>
          <p>
            At AbleBooks Initiative, our goal is rooted in the belief that every child with a disability deserves to see
            themselves in the stories they read. Our goal is abbreviated as <b>READ</b>, and it stands for:
          </p>
        </div>
      </div>
      <div className="mansima">
        <div className="object-container">
          {objectives.map((objective, index) => (
            <div key={index} className="container-content">
              <div className="image_and_heading">
                <Image src={objective.icon || "/placeholder.svg"} alt={objective.title} width={64} height={64} />
                <div className="heading">{objective.title}</div>
              </div>
              <div className="details">{objective.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

