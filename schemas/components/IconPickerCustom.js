import React from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import NounProject from '@mars/the-noun-project'

nounProject = new NounProject({
  key: 'key',
  secret: 'secret'
});

nounProject.getIconsByTerm('goat', {limit: 5}, function (err, data) {
  if (!err) {
      console.log(data.icons);
  }
});

const createPatchFrom = value => PatchEvent.from(value === '' ? unset() : set(String(value)))


class IconPickerCustom extends React.Component{


    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    };


    render = () =>{
        const {type, value, onChange} = this.props
        return (
            <FormField label={type.title} description={type.description}>
              <input
                type="text"
                value={value === undefined ? '' : value}
                onChange={event => onChange(createPatchFrom(event.target.value))}
                ref={element => this._inputElement = element}
              />
            </FormField>
        )
    }
}

export default IconPickerCustom;