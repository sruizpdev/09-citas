import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const Formulario = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const confirmarHora = (time) => {
    console.warn('A time has been picked: ', time);
    hideTimePicker();
  };
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
          <Text style={styles.label}>Teléfono:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(texto) => console.log(texto)}
          />
          <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={confirmarFecha}
              onCancel={hideDatePicker}
            />
          </View>
          <View>
            <Button title="Show Time Picker" onPress={showTimePicker} />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={confirmarHora}
              onCancel={hideTimePicker}
            />
          </View>
          <Text style={styles.label}>Síntomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(texto) => console.log(texto)}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  formulario: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
export default Formulario;
