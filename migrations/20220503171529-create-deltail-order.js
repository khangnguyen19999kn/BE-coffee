'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('deltailOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codeOrder: {
        type: Sequelize.STRING
      },
      idSP: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      size_product: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      resultPrice: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('deltailOrders');
  }
};