import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import TitleText from "../components/TitleText";
import { connect } from "react-redux";
import { getData } from "../redux/actions/data";
import PropTypes from "prop-types";

const Header = ({ title, getData, data }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  console.log(data)

  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center"
  }
});

Header.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.data.data
});

export default connect(mapStateToProps, { getData })(Header);
