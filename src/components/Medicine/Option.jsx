import { Card, Button } from "react-bootstrap"
export const Option = ({ medical }) => {
    return(
        <Card className="p-0">
            <Card.Header as="h5">{medical.name}</Card.Header>
            <Card.Body>
                <Card.Title>${medical.price}</Card.Title>
                <Card.Text>
                    {medical.companyName}
                </Card.Text>
                <Button variant="primary">Link</Button>
            </Card.Body>
        </Card>
    )
}