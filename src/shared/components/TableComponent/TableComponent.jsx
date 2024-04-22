import { useState } from "react";
import { useTable } from "react-table";
import {
  Button,
  ButtonModal,
  IconWrapper,
  SvgArrow,
  SvgDate,
  SvgMap,
  SvgModal,
  Table,
  Td,
  TextAdd,
  Th,
} from "./TableComponent.styled";
import sprite from "../../images/symbol-defs.svg";
import { useParams } from "react-router-dom";
import { deleteWords, wordsAdd } from "../../../redux/words/operations";
import { useDispatch } from "react-redux";
import ModalOpen from "../Modal/ModalOpen";
import { Modal } from "../Modal/Modal";
import EditWordForm from "../Modal/EditModal/EditModal";

const TableComponent = ({
  columns,
  data,
  onPageChange,
  totalPages,
  currentPage,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  const dispatch = useDispatch();

  const { id } = useParams();

  const [selectedRowIndexEdit, setSelectedRowIndexEdit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModal = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRowIndex(null);
    setIsOpen(false);
  };

  const openModalEdit = (rowIndex) => {
    setSelectedRowIndexEdit(rowIndex);
    setIsOpenEdit(true);
  };

  const closeModalEdit = () => {
    setSelectedRowIndexEdit(null);
    setIsOpenEdit(false);
  };

  const addWordToOwn = (id) => {
    dispatch(wordsAdd(id));
  };

  return (
    <>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <Th {...column.getHeaderProps()}>
                  <IconWrapper>
                    {index < 2 ? (
                      <>
                        {column.render("Header")}
                        {index === 0 && (
                          <SvgMap>
                            <use href={sprite + "#icon-uk"}></use>
                          </SvgMap>
                        )}
                        {index === 1 && (
                          <SvgMap>
                            <use href={sprite + "#icon-ua"}></use>
                          </SvgMap>
                        )}
                      </>
                    ) : (
                      column.render("Header")
                    )}
                  </IconWrapper>
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={rowIndex}>
                {row.cells.map((cell, index) => (
                  <Td {...cell.getCellProps()} key={index}>
                    {index === row.cells.length - 1 ? (
                      id === "recommend" ? (
                        <Button onClick={() => addWordToOwn(row.original._id)}>
                          <TextAdd>Add to dictionary</TextAdd>
                          <SvgArrow>
                            <use href={sprite + "#icon-linie"}></use>
                          </SvgArrow>
                        </Button>
                      ) : (
                        <>
                          {isOpen ? (
                            <Button onClick={() => closeModal()}>
                              <SvgDate>
                                <use href={sprite + "#icon-date"}></use>
                              </SvgDate>
                            </Button>
                          ) : (
                            <Button onClick={() => openModal(rowIndex)}>
                              <SvgDate>
                                <use href={sprite + "#icon-date"}></use>
                              </SvgDate>
                            </Button>
                          )}
                          {selectedRowIndex === rowIndex && (
                            <ModalOpen closeModal={closeModal} isOpen={isOpen}>
                              {isOpenEdit ? (
                                <ButtonModal onClick={() => closeModalEdit()}>
                                  <SvgModal>
                                    <use href={sprite + "#icon-edit"}></use>
                                  </SvgModal>
                                  Edit
                                </ButtonModal>
                              ) : (
                                <ButtonModal
                                  onClick={() => openModalEdit(rowIndex)}
                                >
                                  <SvgModal>
                                    <use href={sprite + "#icon-edit"}></use>
                                  </SvgModal>
                                  Edit
                                </ButtonModal>
                              )}
                              {selectedRowIndexEdit === rowIndex && (
                                <Modal
                                  onClose={closeModalEdit}
                                  isOpen={isOpenEdit}
                                >
                                  <EditWordForm
                                    id={row.original}
                                    onClose={closeModalEdit}
                                  />
                                </Modal>
                              )}
                              <ButtonModal
                                onClick={() =>
                                  dispatch(deleteWords(row.original._id))
                                }
                              >
                                <SvgModal>
                                  <use href={sprite + "#icon-trash"}></use>
                                </SvgModal>
                                Delete
                              </ButtonModal>
                            </ModalOpen>
                          )}
                        </>
                      )
                    ) : (
                      cell.render("Cell")
                    )}
                  </Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
