import {Card , CardBody } from "reactstrap"

const Footer = ({FC}) =>{
    return(
      <div>
          <Card color={FC} className="shadow-lg">
              <CardBody>
                  <h3 className="display-3">iCharts</h3>
              </CardBody>
          </Card>
      </div>
    )
}
export default Footer