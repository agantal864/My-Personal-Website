import SectionLayout from "../components/layout/SectionLayout";
import { Form, FormItems } from "./components/Form";
import Button from "../components/ui/button";

function contact() {
  return (
    <SectionLayout id="Contact">
      <Form title="Get in Touch" description="I’d love to hear from you! Whether you have a question, an opportunity, or just want to connect, feel free to reach out.">
        <FormItems type="text" htmlfor="name" label="Name" />
        <FormItems type="email" htmlfor="email" label="Email" />
        <FormItems type="message" htmlfor="message" label="Message" rows={5} />
        <Button type="submit" label="Send An Email" padding_y="py-3" large={false} icon="mail"/>
      </Form>    
    </SectionLayout>
  )
}

export default contact