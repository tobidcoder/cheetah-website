import {
  Image,
  Avatar,
  Text,
  Group,
  SimpleGrid,
  Container,
} from "@mantine/core";
import classes from "./Styles.module.css";

export default function Page() {
  return (
    <Container size={"lg"} mb="xl">
      <SimpleGrid cols={2} spacing="lg" mb='lg'>
        <Group wrap="nowrap" gap={0}>
          <div className={classes.body}>
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              technology
            </Text>
            <Text className={classes.title} mt="xs" mb="md">
              The best laptop for Frontend engineers in 2022
            </Text>
            <Group wrap="nowrap" gap="xs">
              <Group gap="xs" wrap="nowrap">
                <Avatar
                  size={20}
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                />
                <Text size="xs">Elsa Typechecker</Text>
              </Group>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
            </Group>
          </div>
        </Group>
        <Image
          alt="image"
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          //   height={160}
          mah={250}
        />
      </SimpleGrid>
      <div style={{justifyContent:'center'}}>
        <h2>The Best Laptops for Frontend Engineers in 2022</h2>

        <p>
          Frontend engineering requires a laptop with a blend of performance,
          display quality, and portability. Here’s a look at some of the top
          laptops in 2022 that are well-suited for frontend engineers.
        </p>

        <h3>1. MacBook Pro 14-inch (2021)</h3>
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788573000"
          alt="MacBook Pro 14-inch"
          width="600"
        />
        <p>
          The <strong>MacBook Pro 14-inch</strong> with the M1 Pro or M1 Max
          chip offers fantastic power, optimized performance, and an incredible
          display. Frontend engineers will appreciate the high-resolution Liquid
          Retina XDR display, which provides sharp and vibrant visuals—ideal for
          design and UI development.
        </p>
        <ul>
          <li>
            <strong>Processor:</strong> Apple M1 Pro / M1 Max
          </li>
          <li>
            <strong>RAM:</strong> Up to 64GB
          </li>
          <li>
            <strong>Storage:</strong> Up to 8TB SSD
          </li>
          <li>
            <strong>Display:</strong> 14.2-inch Liquid Retina XDR
          </li>
          <li>
            <strong>Battery Life:</strong> Up to 17 hours
          </li>
        </ul>

        <h3>2. Dell XPS 15</h3>
        <img
          src="https://i.dell.com/sites/imagecontent/products/publishingimages/xps-15-9510-laptop/laptop-xps-15-9510-1.png"
          alt="Dell XPS 15"
          width="600"
        />
        <p>
          The <strong>Dell XPS 15</strong> is a Windows laptop that’s highly
          regarded by developers. With a 4K display option, this laptop brings
          pixel-perfect details for frontend design. It’s powered by Intel’s
          11th-gen processors, and you can configure it with a dedicated GPU for
          handling more demanding tasks like animations and graphics processing.
        </p>
        <ul>
          <li>
            <strong>Processor:</strong> Up to Intel Core i9
          </li>
          <li>
            <strong>RAM:</strong> Up to 64GB
          </li>
          <li>
            <strong>Storage:</strong> Up to 2TB SSD
          </li>
          <li>
            <strong>Display:</strong> 15.6-inch UHD+ (3840 x 2400)
          </li>
          <li>
            <strong>Battery Life:</strong> Up to 10 hours
          </li>
        </ul>

        <h3>3. Lenovo ThinkPad X1 Carbon (Gen 9)</h3>
        <img
          src="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-intel-hero.png?context=bWFzdGVyfHJvb3R8MjM2NTM1fGltYWdlL3BuZ3xoYjQvaDA0LzExOTU4NzYwNTUzMTg2LnBuZ3xlYTgyYjFjZmVjYmQyOGQyZjdmMDc3MDZiZTgyZTc1ZmJlNjYyNTI2OGU3ZjQ0NmFmZTVjZGMwZDM0YjhmY2Y2"
          alt="Lenovo ThinkPad X1 Carbon"
          width="600"
        />
        <p>
          The <strong>Lenovo ThinkPad X1 Carbon</strong> is a powerhouse for
          frontend engineers who need a lightweight yet powerful machine. It’s
          known for its excellent keyboard, long battery life, and robust
          performance, making it ideal for coding on the go. The 14-inch display
          with an optional 4K screen is a plus for visual clarity.
        </p>
        <ul>
          <li>
            <strong>Processor:</strong> Up to Intel Core i7
          </li>
          <li>
            <strong>RAM:</strong> Up to 32GB
          </li>
          <li>
            <strong>Storage:</strong> Up to 1TB SSD
          </li>
          <li>
            <strong>Display:</strong> 14-inch UHD (3840 x 2400)
          </li>
          <li>
            <strong>Battery Life:</strong> Up to 15 hours
          </li>
        </ul>

        <h3>4. Microsoft Surface Laptop Studio</h3>
        <img
          src="https://c.s-microsoft.com/en-us/CMSImages/1920_Panel1.jpg?version=b8de1c9e-24e0-5385-7c63-6f3902f77b9b"
          alt="Microsoft Surface Laptop Studio"
          width="600"
        />
        <p>
          The <strong>Microsoft Surface Laptop Studio</strong> is a versatile
          choice for frontend engineers who also work with design tools. Its
          unique hinge design lets you use it as a tablet, while the PixelSense
          touchscreen provides sharp color accuracy. This laptop is perfect for
          frontend developers who need both development and design
          functionalities in one.
        </p>
        <ul>
          <li>
            <strong>Processor:</strong> Up to Intel Core i7
          </li>
          <li>
            <strong>RAM:</strong> Up to 32GB
          </li>
          <li>
            <strong>Storage:</strong> Up to 2TB SSD
          </li>
          <li>
            <strong>Display:</strong> 14.4-inch PixelSense (2400 x 1600)
          </li>
          <li>
            <strong>Battery Life:</strong> Up to 12 hours
          </li>
        </ul>

        <h3>5. ASUS ZenBook Pro Duo</h3>
        <img
          src="https://dlcdnwebimgs.asus.com/gain/6a20c1a9-b1d4-4a4b-b2e5-2e1f5eb0d5df/"
          alt="ASUS ZenBook Pro Duo"
          width="600"
        />
        <p>
          For frontend engineers who love multitasking, the{" "}
          <strong>ASUS ZenBook Pro Duo</strong> is a fantastic option. It
          features a unique dual-screen design with a 4K main display and a
          secondary ScreenPad Plus, ideal for code reference, design tools, and
          media controls.
        </p>
        <ul>
          <li>
            <strong>Processor:</strong> Up to Intel Core i9
          </li>
          <li>
            <strong>RAM:</strong> Up to 32GB
          </li>
          <li>
            <strong>Storage:</strong> Up to 1TB SSD
          </li>
          <li>
            <strong>Display:</strong> 15.6-inch 4K UHD (3840 x 2160)
          </li>
          <li>
            <strong>Battery Life:</strong> Up to 8 hours
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Each of these laptops offers unique strengths, catering to different
          aspects of frontend development. Whether you prioritize display
          quality, processing power, or multitasking capabilities, there’s an
          option here to help you work efficiently and creatively as a frontend
          engineer in 2022.
        </p>
      </div>
    </Container>
  );
}
