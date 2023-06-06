import Form from 'react-bootstrap/Form'

interface QuantityFilterProps {
  handleQuantityChange: (quantity: number) => void
}

const QuantityFilter = ({ handleQuantityChange }: QuantityFilterProps) => {
  return (
    <div className='quantity-field'>
      <Form.Label>Quantity</Form.Label>
      <Form.Select aria-label="Quantity Select" onChange={(e) => { handleQuantityChange(parseInt(e.target.value)) }}>
        <option value='10'>10</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
      </Form.Select>
    </div>
  )
}

export default QuantityFilter
